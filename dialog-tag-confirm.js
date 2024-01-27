htmx.defineExtension('dialog-tag-confirm', {
    onEvent: function(name, evt) {
        if (name !== 'htmx:confirm') return
        if (!evt.detail?.question) return

        evt.preventDefault()

        /**
         * @type {HTMLElement | null}
         */
        const sourceElement = evt.detail.elt
        const templateId = sourceElement.dataset.confirmTemplate ?? '#dialog-tag-confirm'

        /**
         * @type {HTMLTemplateElement | null}
         */
        const template = document.querySelector(templateId)
        if (!template) throw `Template '${templateId}' not found!`

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