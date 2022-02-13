how to create python project development step by step 

1. python install
2. Editor VSCode
3. Postman api check
4. Postgres SQL database install
5. install django
    command =-> pip install django
6. install restApi
    command-> pip install djangorestframework
7. install django cors platafrom
    command-> pip install django-cors-headers
8. Now create django project
    command-> django-admin startproject name....
9. code open Editor

10. urls.py configuration the url

11. setting.py configuration the project

12. manage.py django project run
    command-> python manage.py runserver

13. Create the app

    command-> python manage.py startapp Name..
14. setting.py add the 

    INSTALLED_APPS = [
        'rest_framework',
        'corsheaders',
        'NameApp.apps.NameappConfig'
    ]

    CORS_ORIGIN_ALLOW_ALL = True

# this domian white listed
    
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware'
    ]

15. Your App folder open models.py 

        # Create your models here.
        smaple code in below:

                    class Departments(models.Model):
                    DepartmenId = models.AutoField(primary_key=True)
                    DepartmenName = models.CharField(max_length=500)

                    class Designations(models.Model):
                    DesignationId = models.AutoField(primary_key=True)
                    DesignationTitle = models.CharField(max_length=500)

16. database install and configuration django

    command-> pip install psycopg2

17. Now create database

18. Database connect the djangoApp setting.py

    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

19. Enter the migrations command

    command-> python manage.py makemigrations EmployeeApp

    then 

    command-> python manage.py migrate EmployeeApp

20. Now create file serializers.py under the your App folder

21. write the code serializers.py

    #import your models and table field add

    from dataclasses import field, fields
    from rest_framework import serializers
    from EmployeeApp.models import Departments, Designations

    class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departments
        fields=('DepartmenId','DepartmenName')

    
    class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Designations
        fields=('DesignationId','DesignationTitle')


22. Write the code views.py

    import re
    from django.shortcuts import render
    from  django.views.decorators.csrf import csrf_exempt
    from  rest_framework.parsers import JSONParser
    from django.http.response import JsonResponse

    from EmployeeApp.models import Departments,Employees,Designations
    from EmployeeApp.serializers import DepartmentSerializer,DesignationSerializer


    # then Write code the CRUD 

# Create your views here.

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
         departments_serializer.save()
         return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.get(DepartmenId=department_data['DepartmenId'])
        departments_serializer=DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmenId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def designationApi(request,id=0):
    if request.method=='GET':
        designations = Designations.objects.all()
        designations_serializer=DesignationSerializer(designations,many=True)
        return JsonResponse(designations_serializer.data,safe=False)
    elif request.method=='POST':
        designation_data=JSONParser().parse(request)
        designations_serializer=DesignationSerializer(data=designation_data)
        if designations_serializer.is_valid():
         designations_serializer.save()
         return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        designation_data=JSONParser().parse(request)
        designation=Designations.objects.get(DesignationId=designation_data['DesignationId'])
        designations_serializer=DepartmentSerializer(designation,data=designation_data)
        if designations_serializer.is_valid():
            designations_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        designation=Designations.objects.get(DesignationId=id)
        designation.delete()
        return JsonResponse("Deleted Successfully",safe=False)


23. Then create the file urls.py in your App folder

    Write the code urls.py 

        from django.urls import re_path
        from EmployeeApp import views

        from django.conf.urls.static import static
        from django.conf import settings

        urlpatterns = [
        re_path(r'^department$',views.departmentApi),
        re_path(r'^department/([0-9]+)$',views.departmentApi),

        re_path(r'^designation$',views.designationApi),
        re_path(r'^designation/([0-9]+)$',views.designationApi)

        ]
24. Before the write code in your main folder urls.py

    from django.contrib import admin
    from django.urls import path

    from django.urls import include, re_path

    urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^',include('NameApp.urls'))
    ]

25. Now run the code

    command-> python manage.py runserver

    and check api in the Postman






