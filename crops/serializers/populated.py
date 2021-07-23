from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import CropSerializer
from sows.serializers.common import SowSerializer
from jwt_auth.serializer import UserSerializer

class PopulatedCropSerializer(CropSerializer):
    comments = PopulatedCommentSerializer(many=True)
    sow = SowSerializer(many=True)
    owner = UserSerializer()