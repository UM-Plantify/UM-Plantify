from django.shortcuts import render
from django.http import JsonResponse
from .models import Species
from .serializers import SpeciesSerializer
from django.views.decorators.csrf import csrf_exempt

def index(request):
    species_list = Species.objects.order_by('-common_name')
    context = {'species_list': species_list}
    return render(request, 'index.html', context)


# Restframework
@csrf_exempt
def get_species_list(request):
    """
    List all species
    """
    species_list = Species.objects.order_by('-common_name')
    serializer = SpeciesSerializer(species_list, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_species(request, id):
    """
    Get specific species
    """
    species = Species.objects.get(pk=id)
    serializer = SpeciesSerializer(species)
    return JsonResponse(serializer.data, safe=False)

