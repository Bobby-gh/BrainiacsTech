const unsplash = (photo: string, width = 1400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

export const projectImages: Record<string, string> = {
  'ledgerline-payments-platform': unsplash('photo-1558494949-ef010cbdcc31'),
  'cobalt-health-care-portal': unsplash('photo-1576091160399-112ba8d25d1d'),
  'orbit-commerce-replatform': unsplash('photo-1556742049-0cfed4f6a45d'),
  'kite-fleet-tracking': unsplash('photo-1492144534655-ae79c964c9d7'),
  'vertex-document-intelligence': unsplash('photo-1677442136019-21780ecad995'),
  'lumen-grid-monitoring': unsplash('photo-1473341304170-971dccb5ac1e'),
}

export const companyImages: Record<string, string> = {
  Fintech: unsplash('photo-1563013544-824ae1b704d3', 900),
  Healthcare: unsplash('photo-1576091160399-112ba8d25d1d', 900),
  Retail: unsplash('photo-1556742049-0cfed4f6a45d', 900),
  Logistics: unsplash('photo-1586528116311-ad8dd3c8310d', 900),
  'Legal tech': unsplash('photo-1450101499163-c8848c66ca85', 900),
  Energy: unsplash('photo-1473341304170-971dccb5ac1e', 900),
  Insurance: unsplash('photo-1454165804606-c3d57bc86b40', 900),
  Travel: unsplash('photo-1488646953014-85cb44e25828', 900),
  Media: unsplash('photo-1492619375914-88005aa9e8fb', 900),
  'Consumer goods': unsplash('photo-1523275335684-37898b6baf30', 900),
  SaaS: unsplash('photo-1519389950473-47ba0277781c', 900),
}
