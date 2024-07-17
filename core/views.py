from django.shortcuts import render
from inertia import inertia

@inertia('Home/index')
def index(request):
    return {
       'contacts': ['testing', 'testing', 'testing'],
   }

@inertia('About/index')
def about_page(request):
    return {}
      
def contact_page(request):
    return render(request , 'contact.html')