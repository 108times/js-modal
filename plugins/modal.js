function _createModal(options) {
    const modal = document.createElement("div","a-modal")
    modal.classList.add("a-modal")
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-overlay">
            <div class="modal-window">
            
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">$tldr;</span>
                </div>
                
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                
                <div class="modal-footer">
                    <button class="btn btn-primary">Ok</button>
                    <button class="btn">Cancel</button>
                </div>
                
            </div>  
        </div>
    `)
    console.log(modal)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) {

    const $modal = _createModal(options)

    return {
        open() {

        },
        close() {

        },
        destroy() {

        }
    }
}