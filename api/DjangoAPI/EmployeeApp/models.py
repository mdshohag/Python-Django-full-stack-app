from django.db import models

# Create your models here.

# class User(models.Model):
#     UserId = models.AutoField(primary_key=True)
#     UserName = models.CharField(max_length=500)
#     UserLoginId = models.CharField(max_length=500)
#     UserLoginPassword = models.CharField(max_length=500)
#     Department = models.CharField(max_length=500)
#     Designation = models.CharField(max_length=500)
#     UserFileName = models.CharField(max_length=500)


class Departments(models.Model):
    DepartmenId = models.AutoField(primary_key=True)
    DepartmenName = models.CharField(max_length=500)


class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    Department = models.CharField(max_length=500)
    Designation = models.CharField(max_length=500)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=500)
    
class Designations(models.Model):
    DesignationId = models.AutoField(primary_key=True)
    DesignationTitle = models.CharField(max_length=500)
