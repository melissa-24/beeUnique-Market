from django.shortcuts import render, redirect, HttpResponseRedirect

# root = {
#     'tab': 'tab title',
#     'title': 'page title',
# }

def index(request):
    root = {
        'tab': 'Store - BeeUnique-Market',
        'title': 'BeeUnique-Market',
    }
    context = {
        'root': root
    }
    return render(request, 'index.html', context)