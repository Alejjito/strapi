import type { Struct, Schema } from '@strapi/strapi';

export interface WeekWeekComponent extends Struct.ComponentSchema {
  collectionName: 'components_week_week_components';
  info: {
    displayName: 'week-component';
    description: '';
  };
  attributes: {
    weekday: Schema.Attribute.Relation<'oneToOne', 'api::weekday.weekday'>;
    digit_min: Schema.Attribute.Integer;
    digit_max: Schema.Attribute.Integer;
    apply: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'week.week-component': WeekWeekComponent;
    }
  }
}
