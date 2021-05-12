"""
Registers the functions for our plugin.
On loading, Wagtail will find this file and execute the contents.
"""
from __future__ import unicode_literals

# Wagtail core imports
from wagtail.admin.rich_text.editors.draftail import features as draftail_features
from wagtail.core import hooks


@hooks.register('register_rich_text_features')
def register_readinglevel_feature(features):
    """
    Registering the `readinglevelcoleman` feature, which shows a reading age in the Draftail editor,
    calculated using the Coleman–Liau Index
    """
    feature_name = 'readinglevelcoleman'
    type_ = feature_name.upper()
    control = {
        'type': type_,
        'description': 'Reading level - Coleman-Liau',
    }
    features.register_editor_plugin(
        'draftail',
        feature_name,
        draftail_features.EntityFeature(
            control,
            js=['api-monkeypatch.js', 'wagtailreadinglevel.coleman.bundle.js']
        )
    )
    features.default_features.append(feature_name)
