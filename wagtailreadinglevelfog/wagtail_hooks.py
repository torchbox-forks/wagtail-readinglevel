"""
Registers the functions for our plugin.
On loading, Wagtail will find this file and execute the contents.
"""
from __future__ import unicode_literals

# Wagtail core imports
from wagtail.admin.rich_text.editors.draftail import features as draftail_features
from wagtail import hooks


@hooks.register('register_rich_text_features')
def register_readinglevel_feature(features):
    """
    Registering the `readinglevelfog` feature, which shows a reading age in the Draftail editor,
    calculated using the Gunning Fog Index
    """
    feature_name = 'readinglevelfog'
    type_ = feature_name.upper()
    control = {
        'type': type_,
        'description': 'Reading level - Gunning Fog',
    }
    features.register_editor_plugin(
        'draftail',
        feature_name,
        draftail_features.EntityFeature(
            control,
            js=['api-monkeypatch.js', 'wagtailreadinglevel.fog.bundle.js']
        )
    )
    features.default_features.append(feature_name)
