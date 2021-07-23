from crops.serializers.common import CropSerializer
from .common import SowSerializer

class PopulatedSowSerializer(SowSerializer):
    crops = CropSerializer(many=True)