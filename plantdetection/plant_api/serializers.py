from rest_framework import serializers
from plant_api.models import Species

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ['id', 'common_name', 'scientific_name']
