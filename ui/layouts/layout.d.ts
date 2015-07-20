﻿declare module "ui/layouts/layout" {
    import view = require("ui/core/view");

    /**
     * Base class for all views that supports children positioning.
     */
    export class Layout extends view.View {

        /**
         * Returns the number of children in this Layout.
         */
        getChildrenCount(): number;

        /**
         * Returns the view at the specified position.
         * @param index The position at which to get the child from.
         */
        getChildAt(index: number): view.View;

        /**
         * Returns the position of the child view
         * @param child The child view that we are looking for.
         */
        getChildIndex(child: view.View): number;

        /**
         * Adds the view to children array.
         * @param view The view to be added to the end of the children array.
         */
        addChild(view: view.View);

        /**
         * Inserts the view to children array at the specified index.
         * @param atIndex The insertion index.
         * @param view The view to be added to the end of the children array.
         */
        insertChild(atIndex: number, child: view.View);

        /**
         * Removes the specified view from the children array.
         * @param view The view to remove from the children array.
         */
        removeChild(view: view.View);

        /**
         * Specify the bottom padding of this layout.
         */
        paddingBottom: number;

        /**
         * Specify the left padding of this layout.
         */
        paddingLeft: number;

        /**
         * Specify the right padding of this layout.
         */
        paddingRight: number;

        /**
         * Specify the top padding of this layout.
         */
        paddingTop: number;
    }
}
