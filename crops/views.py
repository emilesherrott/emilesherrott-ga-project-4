from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Crop
from .serializers.common import CropSerializer
from .serializers.populated import PopulatedCropSerializer
# Create your views here.



class CropListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        crops = Crop.object.all()
        serialized_crops = PopulatedCropSerializer(crops, many=True)
        return Response(serialized_crops.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        crop_to_add = CropSerializer(data=request.data)
        if crop_to_add.is_valid():
            crop_to_add.save()
            return Response(crop_to_add, status=status.HTTP_201_CREATED)
        return Response(crop_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        
class CropDetailView(APIView):

    def get_crop(self, pk):
        try:
            return Crop.objects.get(pk=pk)
        except:
            raise NotFound(detail="Cannot find crop")


    def get(self, _request, pk):
        individual_crop = self.get_crop(pk=pk)
        serialized_individual_crop = PopulatedCropSerializer(individual_crop)
        return Response(serialized_individual_crop.data, status=status.HTTP_200_OK) 


    def delete(self, _request, pk):
        crop_to_delete = self.get_crop(pk=pk)
        crop_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
    def put(self, request, pk):
        crop_to_update = self.get_crop(pk=pk)
        updated_crop = CropSerializer(crop_to_update, data=request.data)
        if updated_crop.is_valid():
            updated_crop.save()
            return Response(updated_crop.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_crop.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
