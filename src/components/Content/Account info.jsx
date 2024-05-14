import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useState } from 'react'; //n
function CitySelector() {
  // État local pour gérer l'affichage de l'input personnalisé
  const [selectedCity, setSelectedCity] = useState('Annaba');
  const [customCity, setCustomCity] = useState('');

  // Fonction appelée lors du changement de la sélection dans la liste déroulante
  const handleSelectChange = (event) => {
    const value = event.target.value;
    // Si l'utilisateur sélectionne "Other", définir la ville personnalisée sur une chaîne vide
    if (value === 'Other') {
      setSelectedCity('');
    } else {
      setSelectedCity(value);
    }
  };

  // Fonction appelée lors du changement de la saisie de l'input personnalisé
  const handleInputChange = (event) => {
    setCustomCity(event.target.value);
  };

  return (
    <FormControl id="city">
      <FormLabel>City</FormLabel>
      <Select
        focusBorderColor="brand.blue"
        value={selectedCity}
        onChange={handleSelectChange}
      >
        <option value="Alger">Alger</option>
        <option value="Oran">Oran</option>
        <option value="Constantine">Constantine</option>
        <option value="Annaba">Annaba</option>
        <option value="Medea">Tizi Ouzou</option>
        <option value="Bejaia">Bejaia</option>
        <option value="Other">Other</option>
      </Select>
      {/* Afficher l'input personnalisé uniquement si "Other" est sélectionné */}
      {selectedCity === 'Other' && (
        <Input value={customCity}
          onChange={handleInputChange}
        />
      )}
    </FormControl>
  );
}

function Accountinfo() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" onChange={handleInputChange} />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" onChange={handleInputChange} />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(408) 996–1010"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@gmail.com"
          onChange={handleInputChange}
      
        />
      </FormControl>
      
      <CitySelector /> 
      <FormControl id="university">
        <FormLabel>University</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" onChange={handleInputChange}/>
      </FormControl>
    </Grid>
  )
}

export default Accountinfo
