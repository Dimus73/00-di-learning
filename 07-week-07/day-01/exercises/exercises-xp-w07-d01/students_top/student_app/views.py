from django.shortcuts import render
from .models import Student
from rest_framework.response import responses
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import StudentSerializer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_202_ACCEPTED, HTTP_204_NO_CONTENT
from datetime import datetime

# Create your views here.


class StudentsView(APIView):
    def get(self, request, dj=None, *args, **kwargs):
        print(request.query_params)
        format_ddmmyyyy = "%d/%m/%Y"
        q = request.query_params.get('date_joined', False)
        if q:
            print ("********Ther is parametr")
            try:
                d = datetime.strptime(q, format_ddmmyyyy)
                queryset = Student.objects.filter(date_joined__date=d)
                print ("*********Ther is valid date")
            except ValueError:
                print ("**********Ther is NOT valid date")
                return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        else:
            queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)



class StudentViewDetail(APIView):
    def get(self, request, st_id=0, *args, **kwargs):
        if st_id:
                try: 
                    queryset = Student.objects.get(pk=st_id)
                except Student.DoesNotExist:
                    return Response(status=HTTP_400_BAD_REQUEST)
        serializer = StudentSerializer(queryset, many=False)
        return Response(serializer.data)

    def post(self, request, st_id=0, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    def put(self, request, st_id=0, *args, **kwargs):
        s=Student.objects.get(pk=st_id)
        serializer = StudentSerializer(instance=s, data=request.data)
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
         
    def delete(self, request, st_id=0, *args, **kwargs):
        try:
            s=Student.objects.get(pk=st_id)
        except Student.DoesNotExist:
	        return Response(status=HTTP_400_BAD_REQUEST)
        s.delete()
        return Response(status=HTTP_204_NO_CONTENT)
