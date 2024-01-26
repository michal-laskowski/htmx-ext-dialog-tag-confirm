htmx.defineExtension('dialog-tag-confirm', {
    onEvent: function(name, evt) {
        if (name !== 'htmx:confirm') return
        if (!evt.detail?.question) return

        evt.preventDefault()
        /**
         * @type {HTMLTemplateElement | null}
         */
        const template = document.querySelector('#dialog-tag-confirm')
        if (!template) throw new Error('Template #dialog-tag-confirm not found!')

        const clone = document.importNode(template.content, true)

        /**
         * @type {HTMLElement | null}
         */
        let content = clone.querySelector('[slot=question]')
        content.innerHTML = evt.detail.question
        /**
         * @type {HTMLDialogElement | null}
         */
        let dialog = clone.querySelector('dialog')

        document.body.appendChild(clone)
        dialog.showModal()
        dialog.addEventListener('close', event => {
            dialog.remove()
            if (dialog.returnValue !== 'confirmed') return
            evt.detail.issueRequest(true)
        })
    }
})