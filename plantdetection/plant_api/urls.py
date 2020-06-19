from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/list', views.get_species_list, name='get_species_list')
]