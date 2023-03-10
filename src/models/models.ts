interface TagCategory {
  version: number;
  name: string;
  color: string;
  usages: number;
  order: number;
  default: boolean;
}

interface Tag {
  version: number;
  names: string[];
  category: string;
  implications: string[];
  suggestions: string[];
  creationTime: string;
  lastEditTime: string;
  usages: number;
  description: string;
}

type MicroTag = Pick<Tag, 'names' | 'category' | 'usages'>;

interface Post {
    "version":            number
    "id":                 number
    "creationTime":       string
    "lastEditTime":       string
    "safety":             <safety>,
    "source":             <source>,
    "type":               <type>,
    "checksum":           <checksum>,
    "checksumMD5":        <checksum-MD5>,
    "canvasWidth":        <canvas-width>,
    "canvasHeight":       <canvas-height>,
    "contentUrl":         <content-url>,
    "thumbnailUrl":       <thumbnail-url>,
    "flags":              <flags>,
    "tags":               <tags>,
    "relations":          <relations>,
    "notes":              <notes>,
    "user":               <user>,
    "score":              <score>,
    "ownScore":           <own-score>,
    "ownFavorite":        <own-favorite>,
    "tagCount":           <tag-count>,
    "favoriteCount":      <favorite-count>,
    "commentCount":       <comment-count>,
    "noteCount":          <note-count>,
    "featureCount":       <feature-count>,
    "relationCount":      <relation-count>,
    "lastFeatureTime":    <last-feature-time>,
    "favoritedBy":        <favorited-by>,
    "hasCustomThumbnail": <has-custom-thumbnail>,
    "mimeType":           <mime-type>,
    "comments": [
        <comment>,
    <comment>,
    <comment>
    ],
    "pools": [
        <pool>,
    <pool>,
    <pool>
    ]
}
