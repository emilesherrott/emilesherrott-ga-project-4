from rest_framework import serializers
from ..models import Sow

class SowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sow
        fields = '__all__'