function reverseSidebarItems(items) {
    // Reverse items in categories
    const result = items.map((item) => {
    if (item.type === 'category') {
        return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
    });
    // Reverse items at current level
    result.reverse();
    return result;
}
  
function popUnshiftItems(items) {
    const lastItem = items.pop();
    items.unshift(lastItem)
    return items;
}

module.exports = { reverseSidebarItems, popUnshiftItems }
