from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedSowSerializer
from .models import Sow

# Create your views here.
class SowListView(APIView):

    def get(self, _request):
        sows = Sow.objects.all()
        serialized_sows = PopulatedSowSerializer(sows, many=True)
        return Response(serialized_sows.data, status=status.HTTP_200_OK)