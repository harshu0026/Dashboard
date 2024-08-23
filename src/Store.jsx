import create from 'zustand';

const useDashboardStore = create((set) => ({
    categories: [
        {
            id: 1,
            name: "CSPM Executive Dashboard",
            widgets: [
                { id: 101, name: "Widget 1", text: "This is Widget 1" },
                { id: 102, name: "Widget 2", text: "This is Widget 2" },
            ],
        },
    ],

    addWidget: (categoryId, widget) =>
        set((state) => {
            const categories = state.categories.map((category) => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        widgets: [...category.widgets, widget],
                    };
                }
                return category;
            });
            return { categories };
        }),

    removeWidget: (categoryId, widgetId) =>
        set((state) => {
            const categories = state.categories.map((category) => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        widgets: category.widgets.filter((widget) => widget.id !== widgetId),
                    };
                }
                return category;
            });
            return { categories };
        }),
}));

export default useDashboardStore;
