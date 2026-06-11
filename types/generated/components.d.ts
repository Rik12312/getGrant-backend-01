import type { Schema, Struct } from '@strapi/strapi';

export interface CountryComponentsCostOfLivingItem
  extends Struct.ComponentSchema {
  collectionName: 'components_country_components_cost_of_living_items';
  info: {
    displayName: 'CostOfLivingItem';
  };
  attributes: {
    avgPrice: Schema.Attribute.Integer;
    categoryName: Schema.Attribute.String;
    maxPrice: Schema.Attribute.Integer;
    minPrice: Schema.Attribute.Integer;
  };
}

export interface CountryComponentsVisaInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_country_components_visa_info_items';
  info: {
    displayName: 'VisaInfoItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsHistory extends Struct.ComponentSchema {
  collectionName: 'components_page_components_histories';
  info: {
    displayName: 'history';
  };
  attributes: {
    description: Schema.Attribute.Text;
    year: Schema.Attribute.String;
  };
}

export interface PageComponentsLicenses extends Struct.ComponentSchema {
  collectionName: 'components_page_components_licenses';
  info: {
    displayName: 'licenses';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsMissionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_page_components_mission_features';
  info: {
    displayName: 'missionFeatures';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'country-components.cost-of-living-item': CountryComponentsCostOfLivingItem;
      'country-components.visa-info-item': CountryComponentsVisaInfoItem;
      'page-components.history': PageComponentsHistory;
      'page-components.licenses': PageComponentsLicenses;
      'page-components.mission-features': PageComponentsMissionFeatures;
    }
  }
}
