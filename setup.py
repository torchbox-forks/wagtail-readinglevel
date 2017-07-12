#!/usr/bin/env python
"""
Wagtail readinglevel plugin that adds reading level check functionality to rich text editors.
"""

from setuptools import setup, find_packages

setup(name='wagtail-readinglevel',
      version='0.1',
      description='Determine reading age of a piece of text.',
      url='http://github.com/vixdigital/wagtail-readinglevel',
      author='VIX Digital',
      author_email='info@vix.digital',
      license='MIT',
      packages=find_packages(),
      install_requires=[
          'wagtail>=1.0',
      ],
      zip_safe=False)
