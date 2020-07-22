/**
 * @name app.js
 * @version 1.0.0
 * @author ADRAR - juil.2020
 * @abstract Manage contact form
 * @see JQuery (https://jquery.com)
 */
$(document).ready(
    () => {
        console.log('App works!')
        // sets array of controls that are required
        const requiredControls = [
            'nom-ctrl',
            'email-ctrl'

        ]
        //Set an event handler on form
        $('#contact-form').on(
            'change keyup',
            (event) => {
                console.log('Change was detected on form')
                let isValid = true // set form as valid before checking required fields

                requiredControls.forEach((control) => {

                    console.log('Check for ${control} control validity ')

                    const requiredControlValue = $('[name="' + control + '"]').val()

                    console.log(`Value for ${control} : ${requiredControlValue}`)
                    if (requiredControlValue == '') {
                        isValid = false//set form as invalid if at least one controls is

                    }
                })
                console.log(`My form is : ${isValid ? 'Valid' : ' invalid'}`)
                if (isValid) {
                    //well buddy, remove that fck disabled attribute
                    $('#send-button').removeAttr('disabled')
                } else {
                    //something went wrong with user...
                    $('#send-button').attr('disabled', 'disabled')

                }
            }
        )

        // blur event handler : fird when the focus is lost froma field
        $('[required]').on(

            'blur',

            (event) => {
                console.log('focus was lost on a required field...But which ?')
                const value = $(event.target).val()
                if (value == '') {
                    // how do i emove a class on the next div ?
                    $(event.target).next('div').removeClass('hidden')

                } else {
                    //well ,how do i add a class on the next div?
                    $(event.target).next('div').addClass('hidden')
                }
            }
        )

        $('form#contact-form').on(

            'submit',
            (event) => {
                event.preventDefault()//Empeche le declanchement de l'evenemeny par defaut)

                // Recupere les donnés du template
                const snackbar = $('#snackbar').contents().clone()


                // Ajouter le élements du snackbar au contenu visible courant
                $('body').append(snackbar)

                // Laisser vivant 3s et spprimer le clone
                setTimeout(
                    () => {
                        snackbar.remove()

                    },
                    3000// 3s
                )
            }
        )
    }
)
