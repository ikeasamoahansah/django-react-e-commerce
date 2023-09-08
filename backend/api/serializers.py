from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)

    # reviews = serializers.PrimaryKeyRelatedField(many=True, queryset=Review.objects.all())
    # products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all())

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username'] 


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'created_at']


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['id', 'title', 'text', 'created_at']