from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel
from wagtail import blocks


class HomePage(Page):
    body = RichTextField(blank=True)
    stream = StreamField(
        [
            ('richtext', blocks.RichTextBlock()),
        ], use_json_field=True, blank=True
    )

    content_panels = Page.content_panels + [
        FieldPanel('body'),
        FieldPanel('stream'),
    ]
