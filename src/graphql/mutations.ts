/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommunity = /* GraphQL */ `
  mutation CreateCommunity(
    $input: CreateCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    createCommunity(input: $input, condition: $condition) {
      id
      createdAt
      title
      description
      owner
      Posts {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCommunity = /* GraphQL */ `
  mutation UpdateCommunity(
    $input: UpdateCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    updateCommunity(input: $input, condition: $condition) {
      id
      createdAt
      title
      description
      owner
      Posts {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCommunity = /* GraphQL */ `
  mutation DeleteCommunity(
    $input: DeleteCommunityInput!
    $condition: ModelCommunityConditionInput
  ) {
    deleteCommunity(input: $input, condition: $condition) {
      id
      createdAt
      title
      description
      owner
      Posts {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      createdAt
      content
      posts {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      createdAt
      content
      posts {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      createdAt
      content
      posts {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      createdAt
      title
      content
      image
      Comments {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      communitys {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      createdAt
      title
      content
      image
      Comments {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      communitys {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      createdAt
      title
      content
      image
      Comments {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      communitys {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCommunityPost = /* GraphQL */ `
  mutation CreateCommunityPost(
    $input: CreateCommunityPostInput!
    $condition: ModelCommunityPostConditionInput
  ) {
    createCommunityPost(input: $input, condition: $condition) {
      id
      communityID
      postID
      community {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateCommunityPost = /* GraphQL */ `
  mutation UpdateCommunityPost(
    $input: UpdateCommunityPostInput!
    $condition: ModelCommunityPostConditionInput
  ) {
    updateCommunityPost(input: $input, condition: $condition) {
      id
      communityID
      postID
      community {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteCommunityPost = /* GraphQL */ `
  mutation DeleteCommunityPost(
    $input: DeleteCommunityPostInput!
    $condition: ModelCommunityPostConditionInput
  ) {
    deleteCommunityPost(input: $input, condition: $condition) {
      id
      communityID
      postID
      community {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPostComment = /* GraphQL */ `
  mutation CreatePostComment(
    $input: CreatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    createPostComment(input: $input, condition: $condition) {
      id
      commentID
      postID
      comment {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePostComment = /* GraphQL */ `
  mutation UpdatePostComment(
    $input: UpdatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    updatePostComment(input: $input, condition: $condition) {
      id
      commentID
      postID
      comment {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePostComment = /* GraphQL */ `
  mutation DeletePostComment(
    $input: DeletePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    deletePostComment(input: $input, condition: $condition) {
      id
      commentID
      postID
      comment {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
