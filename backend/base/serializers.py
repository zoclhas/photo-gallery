from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Images


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = "__all__"
