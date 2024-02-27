

export default {
    name: 'mattress',
    title: 'Mattress',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
        },
        {
            name: 'prices',
            title: 'Prices',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'size',
                            title: 'Size',
                            type: 'string',
                            options: {
                                list: [`Single`, `Super single`, `Queen`,`King`], // Define your available sizes here
                            },
                        },
                        {
                            name: 'price',
                            title: 'Price',
                            type: 'number',
                        },
                    ],
                },
            ],
            validation: Rule => Rule.min(1),
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'firmness',
            title: 'Firmness',
            type: 'array',
            of: [
                {
                    type: 'string',
                    options: {
                        list: ['Soft', 'Medium Soft', 'Medium', 'Medium Firm', 'Firm'],
                    },
                },
            ],
            validation: Rule => Rule.min(1),
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
