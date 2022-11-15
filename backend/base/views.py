from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = ["/gallery"]
    return Response(routes)


@api_view(['GET'])
def getImages(request):
    images = ["hi", "hi 2", "hi 3"]
    return Response(images)
