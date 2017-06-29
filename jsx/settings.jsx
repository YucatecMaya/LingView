var data = {
  "metadata": {
    "tier IDs": {
      "T1": "A'ingae",
      "T2": "A'ingae Words",
      "T3": "A'ingae Morphemes",
      "T4": "English Translation",
      "T5": "Spoken English"
    },
    "speaker IDs": {
      "S1": {
        "name": "Hugo Lucitante",
        "language": "A'ingae",
        "tier": "T1"
      },
      "S2": {
        "name": "Scott AnderBois",
        "language": "English",
        "tier": "T5"
      }
    }
  },
  "sentences": [
    {
      "speaker": "S1",
      "start_time": 0,
      "end_time": 3005,
      "num_slots": 12,
      "text": "Ecuadorningi canse'fa mil a'indeccu",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "Ecuadorningi"
            },
            {
              "start_slot": 3,
              "end_slot": 6,
              "value": "canse'fa"
            },
            {
              "start_slot": 6,
              "end_slot": 8,
              "value": "mil"
            },
            {
              "start_slot": 8,
              "end_slot": 12,
              "value": "a'indeccu"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "Ecuador=ni=ngi"
            },
            {
              "start_slot": 3,
              "end_slot": 6,
              "value": "canse='fa"
            },
            {
              "start_slot": 6,
              "end_slot": 8,
              "value": "mil"
            },
            {
              "start_slot": 8,
              "end_slot": 12,
              "value": "a'i=ndeccu"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 12,
              "value": "1000 of us live in Ecuador."
            }
          ]
        }
      ]
    },
    {
      "speaker": "S1",
      "start_time": 3005,
      "end_time": 7211,
      "num_slots": 12,
      "text": "Toya'caen Colombiani quentsu canse'fa ba've mil",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 4,
              "value": "Toya'caen"
            },
            {
              "start_slot": 4,
              "end_slot": 5,
              "value": "Colombiani"
            },
            {
              "start_slot": 6,
              "end_slot": 8,
              "value": "quentsu canse'fa ba've"
            },
            {
              "start_slot": 8,
              "end_slot": 12,
              "value": "mil"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 12,
              "value": "1000 of us live in Ecuador."
            }
          ]
        }
      ]
    },
    {
      "speaker": "S2",
      "start_time": 6099,
      "end_time": 8814,
      "num_slots": 1,
      "text": "Hmm yes that's quite interesting.",
      "dependents": [
        
      ]
    },
    {
      "speaker": "S2",
      "start_time": 0,
      "end_time": 3005,
      "num_slots": 12,
      "text": "Ecuadorningi canse'fa mil a'indeccu",
      "dependents": [
        {
          "tier": "T2",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "Ecuadorningi"
            },
            {
              "start_slot": 3,
              "end_slot": 6,
              "value": "canse'fa"
            },
            {
              "start_slot": 6,
              "end_slot": 8,
              "value": "mil"
            },
            {
              "start_slot": 8,
              "end_slot": 12,
              "value": "a'indeccu"
            }
          ]
        },
        {
          "tier": "T3",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 3,
              "value": "Ecuador=ni=ngi"
            },
            {
              "start_slot": 3,
              "end_slot": 6,
              "value": "canse='fa"
            },
            {
              "start_slot": 6,
              "end_slot": 8,
              "value": "mil"
            },
            {
              "start_slot": 8,
              "end_slot": 12,
              "value": "a'i=ndeccu"
            }
          ]
        },
        {
          "tier": "T4",
          "values": [
            {
              "start_slot": 0,
              "end_slot": 12,
              "value": "1000 of us live in Ecuador."
            }
          ]
        }
      ]
    }
  ]
};

// I/P: tier_id, a string like "T1" or "T15"
// O/P: a list of DOM elements with corresponding tier IDs
// Status: tested, working
function getElementsByTierID(tier_id) {
	var tiers = document.querySelectorAll("[data-tier]");
	var output = [];
	for (var i=0; i<tiers.length; i++) {
		var current_tier = tiers[i];
		if (current_tier.getAttribute("data-tier") == tier_id) {
			output.push(current_tier);
		}
	}
	return output;
}

// I/P: tier_id, a string like "T1" or "T15"
// O/P: the display style of that tier is changed
// Status: tested, in flux
function changeTierVisibility(tier_id) {
	var elements = getElementsByTierID(tier_id);
	console.log("CALLED");
	for (var i=0; i<elements.length; i++) {
		if (elements[i].style.display == "none") {
			elements[i].style.display = "table-row";
		}
		else {
			elements[i].style.display = "none";
		}
	}
}

class TierCheckbox extends React.Component {
	// I/P: tier_id, a string like "T1" or "T15"
	//		tier_name, a string like "English Morphemes"
	// O/P: a checkbox with the ability to hide/show elements with tier-data={tier_id}
	// Status: unfinished
	constructor(props) {
		super(props);
		this.state = {
			checkboxState: true
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(event) {
		this.setState({checkboxState: !this.state.checkboxState});
		changeTierVisibility("T2");
	}

	render() {
		var tier_id = this.props.tier_id;
		var tier_name = this.props.tier_name;
		return <input type="checkbox" onClick={this.toggle} defaultChecked />;
	}
}

// class Settings extends React.Component {
// 	// I/P: metadata, in JSON format
// 	// O/P: a settings panel, with ordered tier names
//	// Status: unfinished
// }

ReactDOM.render(
	<TierCheckbox tier_id="T2" tier_name="Morpheme"/>,
 	document.getElementById('settings')
);