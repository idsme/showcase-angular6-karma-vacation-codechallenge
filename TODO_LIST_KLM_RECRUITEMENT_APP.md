# Kiosk Redesign Team
## Stories


- The application should consist of two screens
1 "Destination Refinement" which allows the user select where he is flying (design attached).

As part of the task you will need to download reference data from the attached Node.js application
    (route: /airports)
    and create an autocomplete that is showing only the three most relevant choices.

- DetailsView after select is only to display the summary of the choice
  <button (click)='select(airport)'></button>
  (navigation should happen when Continue button is clicked on the first screen)
  Assumption=>SCOPE( Thus Not By selecting a filtered result )

Focus=>
Please note that we will focus our attention on HOW this functionality is implemented
(code structure, unit tests, etc.)
and not even the completeness of the solution.


Not Pixel Perfect
DO NOT need to follow the example screen-shot (i.e. styling can be simpler etc.). It is provided only to better illustrate the task.

#TODOs PLAN
* DONE 5min Test Run Angular Server
* DONE 5min Generate Angular CLI project vacation
* DONE 5min Connect GitHub repo vacation, /feature/search_for_destinations
* DONE 5min Convert JSON to Interfaces place into /api =>json2ts conversion needed some work
* DONE 5min Generate Section Components shells
** airport/AirportSearchSectionComponent
** airport/AirportDetailsSectionComponent
* DONE 5min TODO Add static Data, to these container components
* DONE 5min Add Simple Debug view logic.
* DONE 10 min Add Routing
** DONE 1min /=>AirportSearchSection
** DONE 1min /airports=>AirportSearchSection
** DONE 1min /airport/code=>AirportDetailsSection
** DONE 1min**=>AirportSearchSection
** DONE 5 Add Router params and debug link in AirportSearcSection for debugging
* 20min TODO Add view logic
** DONE airport/SearchAirportInputComponent
** DONE airport/AirportLabelItem
** 10min label-item (click)="setAirportNameIntoInput(airport.airport.name)"
** DONE 5min <button id="selectAirport" (click)=>selectAirport($event)/> =>Console.log(for test)
** DONE 5min <input type=text (onkeyup)=>filterAirportResults($event)/>,
* 20min TODO implement basic API call, tests (without error handling not in spec)
* 20min TODO implement FilterCall (BehaviourSubject)?
Total: Time ??



# Acceptance Guidelines
TODO * Parameter
TODO * 10min HTML5
TODO * >15min Tests (ng test / ng test --code-coverage) 85+ is now at 75%
TODO * 2min Formatted Linted
DONE * 1min /assets/api
DONE * 1min /api
DONE * 1min /services
DONE * 1min /

TODO * 1min /Shared Module?
INPROGRESS * 1min Share() Reduce number of network calls.
DONE * 1min is every object in its correct place. (Interfaces/Components/Services) 
            Is everthing in a component relevant to that component or should it be somewhere else
 
# Just better, to have... ;)
* DONE Rewrite to use BehaviourSubject
* DONE Rewrite to use On resolve
* DONE Load information via Resolvers.
* DONE Implement service internals with a Behaviour Subject.
* TODO Coverage is low for SelectedAirportsResolverService 



# NO more time.. for .
* 

# Extra
DONE * Color Blue => klm.com
DONE * Border Radius 50% input
DONE * Bottom-Border under input
SKIP * Rip font from klm.com


# Shorten time.. (What can I steal)
SKIP * CSS from KLM.com
* MasterData service from Current Project, 
* Including Text, KeyPipe, EntriesPipe?

