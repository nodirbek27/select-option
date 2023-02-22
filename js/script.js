
  var countryStateInfo = {
    Uzbekistan: {
      Fergana: {
        "Bagdad": ["Irgoli", "Ultarma", "Qaxat", "Samandarak"],
        "Rishton": ["Rishton-1", "Rishton-2"],
      },
      Andijon: {
        Asaka: ["Asaka-1", "asaka-2"],
        Baliqchi: ["Baliqchi-1", "Baliqchi-2"],
      },
    },
    Qoraqalpoqiston: {
      Nukus: {
        Nukus1: ["Nukus-1", "Nukus-2", "Nukus-3", "Nukus-4"],
        Nukus2: ["Nukus-21", "Nukus-22", "Nukus-23", "Nukus-24"],
      },
      Beruniy: {
        Beruniy1: ["Beruniy-1", "Beruniy-2", "Beruniy-3", "Beruniy-4"],
        Beruniy2: ["Beruniy-21", "Beruniy-22", "Beruniy-23", "Beruniy-24"],
      },
    },
  };

  window.onload = function () {
    //todo: Get all input html elements from the DOM

    const countrySelection = document.querySelector("#Country"),
      regionSelection = document.querySelector("#Region"),
      citySelection = document.querySelector("#City"),
      vSelection = document.querySelector("#Village");

      // todo: Disable all  Selection by setting disabled to false
      regionSelection.disabled = true; // remove all options bar first
      citySelection.disabled = true; // remove all options bar first
      vSelection.disabled = true; // remove all options bar first

      for (let country in countryStateInfo) {
        countrySelection.options[countrySelection.options.length] = new Option(
          country,
          country
        );
      }



    //Todo: Country Changed

    countrySelection.onchange = (e) => {
      regionSelection.disabled = false;
      // todo: Clear all options from State Selection
      regionSelection.length = 1; // remove all options bar first
      citySelection.length = 1; // remove all options bar first
      vSelection.length = 1; // remove all options bar first

      // if (e.target.selectedIndex < 1) return; // done

      // todo: Load states by looping over countryStateInfo
      for (let region in countryStateInfo[e.target.value]) {
        regionSelection.options[regionSelection.options.length] = new Option(
          region,
          region
        );
      }
    };

    //todo: Region Changed
  regionSelection.onchange = (e) => {
    citySelection.disabled = false;

    citySelection.length = 1; // remove all options bar first
    vSelection.length = 1; // remove all options bar first
    for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
      );
    }
  };

  //todo: City Changed
  citySelection.onchange = (e) => {
    vSelection.disabled = false; // remove all options bar first
    vSelection.length = 1; // remove all options bar first
    for (let village of countryStateInfo[countrySelection.value][regionSelection.value][e.target.value]) {
      vSelection.options[vSelection.options.length] = new Option(
        village,
        village
      );
    }
  };
};