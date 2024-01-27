# htmx-ext-dialog-tag-confirm

htmx extension for custom confirm dialog using dialog tag.

## Demo

[Simple](./demo/dialog-tag-confirm.html?raw=1)

## Usage

### Install

Install extension

```html
<!-- From jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/michal-laskowski/htmx-ext-dialog-tag-confirm/dialog-tag-confirm.min.js"></script>

<!-- Or a local file -->
<script src="./dialog-tag-confirm.min.js"></script>
```

Enable extension by adding _hx-ext="dialog-tag-confirm"_

### Define dialog template

Define template with id="dialog-tag-confirm".

Confirm button must have value="confirmed".

```html
<template id="dialog-tag-confirm">
    <dialog>
        <form>
            <!-- Slot for question -->
            <div slot="question"></div>
            <div>
                <!-- Confirm button -->
                <button value="confirmed" type="submit" formmethod="dialog">Yes</button>

                <!-- Cancel button -->
                <button type="submit" value="canceled" formmethod="dialog" formnovalidate>No</button>
            </div>
        </form>
    </dialog>
</template>
```

### Conditional templates

You can specify template by adding __data-confirm-template__.

```HTML
<button

    data-confirm-template='#warning-template' 

    hx-confirm="Are you sure you want to refresh?" hx-get="/customTemplate" hx-target="this" hx-swap="outerHTML" >
    My button

</button> 

```
