from django.shortcuts import render

# Create your views here.

def landing(request):
    return render(request, 'landing.html')

def dashboard(request):
    return render(request, 'dashboard.html')