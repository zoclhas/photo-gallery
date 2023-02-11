from django.urls import path
from . import views

urlpatterns = [
    path("", views.getImages, name="get-images"),
    path("<int:pk>/", views.getImage, name="get-image"),
    path("create/", views.createImage, name="create-image"),
    path("delete/<str:pk>", views.deleteImage, name="delete-image"),
    path("update/<str:pk>", views.updateImage, name="update-image"),
]
