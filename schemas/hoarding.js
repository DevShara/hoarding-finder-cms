export default {
    name: 'hoarding',
    type: 'document',
    title: 'Hoarding',
    fields: [
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'size',
            type: 'string',
            title: 'Size'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'route',
            type: 'string',
            title: 'Route'
        },
        {
            name: 'isAvailable',
            type: 'boolean',
            title: 'Is Available'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              }
            ]
          },
          {
            title: 'Hoarding Location',
            name: 'mapLocation',
            type: 'geopoint'
          },
          {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
          name: 'landOwner',
          type: 'string',
          title: 'Land Owner'
      },

      {
        name: 'client',
        type: 'string',
        title: 'Client',
        hidden: ({document}) => document.isAvailable == true
    },
          
    ]
}