# Generated by Django 4.2.16 on 2024-11-24 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0005_alter_keywords_news_useraction'),
    ]

    operations = [
        migrations.CreateModel(
            name='TopKeywords',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('keyword', models.CharField(max_length=50, unique=True)),
                ('count', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]