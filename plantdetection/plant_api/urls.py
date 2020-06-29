from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/list', views.get_species_list, name='get_species_list'),
    path('api/species/<int:id>/', views.get_species, name='get_species'),
    path('api/identify', views.Identify.as_view(), name='identify')
]
