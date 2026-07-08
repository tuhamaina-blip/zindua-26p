$(document).ready(function () {
    $("#myForm").on('submit', function (e) {
        e.preventDefault();

        let formData = $(this).serialize();

        $.ajax({
            url: "https://example.com/api/submit",
            type: "POST",
            data: formData,
            success: function(response) {
                $('#responseMessage').html('<p>Data sent successfully!</p>')
                console.log(response)
            },
            error: function(xhr, status, error) {
                $('#responseMessage').html('<p>An error occurred </p>')
                console.error(error)
            }
            
        })
    })

    // Fetching data from a server
    function fetchData(url, successCallback, errorCallback) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json', //JSON.parse(response)
            success: function(data) {
                if (typeof successCallback === 'function') {
                    successCallback(data)
                }
            },
            error: function(xhr, status, error) {
                if (typeof errorCallback === 'function') {
                    errorCallback(xhr, status, error)
                }
            }
        })
    };

    // Event listeners
    $('#loadProfileBtn').on('click', function() {
        $('#fetchMessage').html('<i class="fa-solid fa-circle-notch fa-spin mr-1"></i> Fetching data...')
            .removeClass().addClass('mt-4 text-sm font-medium text-center text-slate-500');
        
        const dataUrl = 'https://jsonplaceholder.typicode.com/users/2';
        
        fetchData(dataUrl, 
            function(data) {
                $('#displayUsername').text(data.username);
                $('#displayEmail').text(data.email);
                
                $('#userDataDisplay').removeClass('hidden').addClass('block animate-fade-in');
                
                $('#fetchMessage').html('<i class="fa-solid fa-circle-check mr-1"></i> Data rendered successfully!')
                    .removeClass().addClass('mt-4 text-sm font-medium text-center text-emerald-600');
            },
            function(xhr, status, error) {
                $('#fetchMessage').html('<i class="fa-solid fa-circle-exclamation mr-1"></i> Failed to fetch data.')
                    .removeClass().addClass('mt-4 text-sm font-medium text-center text-rose-600');
                console.error("Fetch error: ", error);
            }
        );
    });
});