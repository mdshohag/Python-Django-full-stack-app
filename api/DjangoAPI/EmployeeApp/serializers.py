from dataclasses import field, fields
from rest_framework import serializers
from EmployeeApp.models import Departments,Employees,Designations

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departments
        fields=('DepartmenId','DepartmenName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees
        fields=('EmployeeId','EmployeeName','Department','DateOfJoining','PhotoFileName','Designation')

class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Designations
        fields=('DesignationId','DesignationTitle')