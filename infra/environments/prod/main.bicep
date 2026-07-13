targetScope = 'resourceGroup'
param location string = resourceGroup().location
param tenantId string
module foundation '../dev/main.bicep' = {
  name: 'prod-foundation'
  params: {
    location: location
    tenantId: tenantId
  }
}

