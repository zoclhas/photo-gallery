from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from .models import Images
from .serializers import ImagesSerializer

# Create your views here.

@api_view(['GET'])
def getImages():
    images = Images.objects.all().order_by("-id")

    serializer = ImagesSerializer(images, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getImage(pk):
    image = Images.objects.get(id=pk)

    serializer = ImagesSerializer(image, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAdminUser])
def createImage(request):
    user = request.user
    image = Images.objects.create(
        user = user,
        title = "Sample Title",
        description = """
            Sample Desc
        """
    )

    serializer = ImagesSerializer(image, many=False)
    return Response(serializer.data)

@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteImage(pk):
    imageForDeletion = Images.objects.get(id=pk)
    imageForDeletion.delete()

    return Response("Image was deleted.")

@api_view(["PUT"])
@permission_classes([IsAdminUser])
def updateImage(request, pk):
    data = request.data
    image = Images.objects.get(id=pk)

    image.title = data["title"]
    image.description = data["description"]
    image.save()

    serializer = ImagesSerializer(image, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAdminUser])
def uploadImage(request):
    _id = request.data["id"]

    image = Images.objects.get(id=_id)
    image.image = request.FILES.get("image")
    image.save()

    return Response("Image is uploaded.")