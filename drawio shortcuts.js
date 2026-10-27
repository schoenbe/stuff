Draw.loadPlugin(function (ui) {
    const graph = ui.editor.graph;

    document.addEventListener('keydown', function (evt) {
        if (!evt.ctrlKey || !evt.shiftKey) {
            return;
        }

        // Don't interfere while editing text
        if (graph.isEditing()) {
            return;
        }

        const cell = graph.getSelectionCell();

        if (cell == null) {
            return;
        }

        // Ctrl+Shift+C = delete selected table column
        if (evt.code === 'KeyC') {
            evt.preventDefault();
            evt.stopPropagation();

            const action = ui.actions.get('deleteColumn');

            if (action != null && action.isEnabled()) {
                action.funct();
            }

            return;
        }

        // Ctrl+Shift+V = delete selected table row
        if (evt.code === 'KeyV') {
            evt.preventDefault();
            evt.stopPropagation();

            const action = ui.actions.get('deleteRow');

            if (action != null && action.isEnabled()) {
                action.funct();
            }
        }
    }, true);

    console.log(
        'Table shortcuts loaded: ' +
        'Ctrl+Shift+C = delete column, ' +
        'Ctrl+Shift+V = delete row'
    );
});
