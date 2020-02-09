export class Book {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    industryIdentifiers: Identifier[];
    readingModes: ReadingMode;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  }

export class ReadingMode {
    text: boolean;
    image: boolean;
}

export class PanelizationSummary {
    containsEpubBubbles: boolean;
    containsIamgeBubbles: boolean;
}

export class Identifier {
    type: string;
    identifier: string;
}

export class ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}
