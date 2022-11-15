from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Images
from .serializers import ImagesSerializer

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = ["/gallery"]
    return Response(routes)


@api_view(['GET'])
def getImages(request):
    images = Images.objects.all().order_by("-id")
    serializer = ImagesSerializer(images, many=True)
    return Response(serializer.data)
