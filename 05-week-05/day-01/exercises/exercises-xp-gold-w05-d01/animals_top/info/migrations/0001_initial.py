# Generated by Django 4.2 on 2023-04-22 09:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Families',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Animals',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=50)),
                ('legs', models.IntegerField()),
                ('weight', models.FloatField()),
                ('height', models.FloatField()),
                ('speed', models.IntegerField()),
                ('photo', models.ImageField(upload_to='photos_n')),
                ('family', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='info.families')),
            ],
        ),
    ]
