$(document).ready(function () {
	$(this).scrollTop(0);

	var chkBoxArr = []

	document.addEventListener('deviceready', onDeviceReady, false)

	function onDeviceReady(){
	checkConnection()

	checkSupport()
	}


	function checkConnection(){
		var networkState = navigator.connection.effectiveType;

		return networkState
		// var states = {};

		// states[Connection.UNKNOWN]  = 'Unknown connection';
		// states[Connection.ETHERNET] = 'Ethernet connection';
		// states[Connection.WIFI]     = 'WiFi connection';
		// states[Connection.CELL_2G]  = 'Cell 2G connection';
		// states[Connection.CELL_3G]  = 'Cell 3G connection';
		// states[Connection.CELL_4G]  = 'Cell 4G connection';
		// states[Connection.CELL]     = 'Cell generic connection';
		// states[Connection.NONE]     = 'No network connection';

		//alert('Connection type: ' + networkState);

	}

	function checkSupport(){

		if(navigator.onLine){
				const deviceID = device.uuid
				const domains = []
				const active = localStorage.getItem("medicedgeEula")
                const orgKey = localStorage.getItem("medicedgeLic")

				if(active){
                    

					var settings = {
						"url": "https://support.smarthealthsol.com/?secret_key=5f2f082dba4476.77393473738&slm_action=slm_check&license_key=" + orgKey + "&registered_domain="+ deviceID +"",
						"method": "GET",
						"timeout": 0,
						"headers": {
						"Content-Type": "application/x-www-form-urlencoded",
						//"Access-Control-Allow-Origin":"*"
						//"Cookie": "PHPSESSID=316e2995c77f2fe4b79e47a9546b8041"
						},
					};



					$.ajax(settings).promise().done(function (response) {
						console.log(response);
						
						for(var i=0; i<response.registered_domains.length; i++){
							
							domains.push(response.registered_domains[i].registered_domain)
											
						}

						console.log(domains)
					// block because the app was not found in domain array
						var isThere = domains.find(element => element == deviceID)
						console.log(isThere)
						if(!isThere){
							document.getElementById("coverApp").style.display = "block"
							$("#ADTMC_lng").hide()
							$("#content").hide()
							$("#coverApp").css("display","block")
							$("#coverApp").append("<div class=\"w3-panel w3-red\"><p>Device UUID not found. Please submit a help desk ticket at support.smarthealthsol.com with a message containing organization and device UUID " + deviceID +  ".</p></div>")
						}
					});

					

				}else{
					$('#ADTMC_lng').show();
				}
				
				
				// 	if(response.status == "pending"){
				// 		activate
				// 		alert(response.status)
				// 		/$('.coverApp').html("<div style=\"position:fixed;padding:0;margin:0;top:0;left:0;width: 100%;height: 100%;background:rgba(255,255,255,0.5);\"></div>")
				// 	}else if(response.status == "active"){
						
						
				// 		var domains = []
						
				// 		for(var i=0; i<response.registered_domains.length; i++){
							
				// 			domains.push(response.registered_domains[i].registered_domain)
											
				// 		}

				// 		if(!domains.find(element => element == deviceID)){
				// 			document.getElementById("coverApp").style.display = "block"
				// 		}
						
										
				// 	}else if(response.status == "blocked"){
				// 		//license has been blocked
				// 		alert(response.status)
				// 	}else if(response.status == "expired"){
				// 		//license has expired message
				// 		alert(response.status)
				// 	}
				// });

			}

		}

		
			$("#activate").click(function(){
                $("#menu").hide()
				
				if($("#agree").is(":checked")){
				//add logic to try activation

					if(navigator.onLine){
						const deviceID = device.uuid
                        const subscriberId = $("#subscriber_Id").val();
                        const subscriberEmail = $("#subscriber_Email").val();
						const domains = []
						const active = localStorage.getItem("medicedgeEula")
						

							if(!active){
			
								var settings = {
									"url": "https://support.smarthealthsol.com/?secret_key=5f2f082dba4476.77393473738&slm_action=slm_activate&license_key=" + subscriberId + "&registered_domain="+ deviceID +"&item_reference="+ subscriberEmail,
									"method": "GET",
									"timeout": 0,
									"headers": {
									"Content-Type": "application/x-www-form-urlencoded",
									//"Access-Control-Allow-Origin":"*"
									//"Cookie": "PHPSESSID=316e2995c77f2fe4b79e47a9546b8041"
									},
								};
			
								
								
								$.ajax(settings).promise().done(function (response) {
									console.log(response);
									
									if(response.result == "success"){
										alert("Activation complete.")
										localStorage.setItem("medicedgeEula", "signed")
                                        localStorage.setItem("medicedgeLic", subscriberId)
                                        window.location.reload()
                                        
										$("#ADTMC_lng").hide()
									}else{
										//add response
										alert(response.message + ", please contact support desk at support.smarthealthsol.com")
									}
                                    
                                    $("html, body").animate({ scrollTop: 0 }, "slow");
								});
							
							}else{
								//check if local storage wiped and active in the license server

								//if license in use and device not found block
								//set localStorage
								alert("checking license server")
							}
						}

				}else{
					alert("Must click agree before activation")
				}

			});
				
			
			sessionStorage.setItem("symptoms", "")
            
});