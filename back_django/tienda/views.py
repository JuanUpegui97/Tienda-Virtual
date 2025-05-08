# tienda/views.py
from django.shortcuts import render, get_object_or_404
from .models import Category, Product

def product_list(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'tienda/product_list.html', context)

def product_list_by_category(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    products = Product.objects.filter(category=category)
    context = {'category': category, 'products': products}
    return render(request, 'tienda/product_list.html', context)

def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    context = {'product': product}
    return render(request, 'tienda/product_detail.html', context)