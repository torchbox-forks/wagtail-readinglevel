# wagtail-readinglevel
A lightweight Wagtail plugin to determine the reading level of text input into a rich text field.

Currently there are two available modes:
1. (Default) Reading Age - calculated using the [Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index)
2. SMOG Index - calculated the [SMOG Index](https://en.wikipedia.org/wiki/SMOG) (only suitable for English).
3. Coleman-Liau Index - calculated using the [Coleman-Liau Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index) 

!! This is an experimental build meant to test yet unreleased api features in Wagtail. It uses a monkeypatch to work specifically with Wagtail 2.0 and will likely break in a future release of Wagtail. !!

## Installation
- ```pip install wagtail-readinglevel```
- Add your desired plugin app names to your list of installed apps AFTER all wagtail app includes (e.g. wagtail.admin, wagtail.core etc.). The names are:
  - ```wagtailreadinglevel``` for Automated Readability Index (Reading Age)
  - ```wagtailreadinglevelsmog``` for SMOG Index
  - ```wagtailreadinglevelcoleman``` for Coleman-Liau Index

## Usage
Once installed You will see the reading level and/or smog index displayed in the toolbar of all rich text fields in your Wagtail admin area (depending on which you added to your list of installed apps).
